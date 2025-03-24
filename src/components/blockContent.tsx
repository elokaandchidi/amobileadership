import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { config } from '../utils/config';

const formatImage = (value: string) => {
  return value?.replace(/image-/g, "").replace(/-png/g, ".png").replace(/-svg/g, ".svg");
};

const TextWithBreaks = ({ children }: { children: React.ReactNode }) => {
  return React.Children.toArray(children).flatMap((child, index) => {
    // If the child is a plain string:
    if (typeof child === 'string') {
      if (child.trim() === "") {
        // If the string is empty or only whitespace/newlines, return a <br />
        return <br key={`br-${index}`} />;
      }
      return child.split('\n').flatMap((text, i) => [
        i > 0 && <br key={`br-${index}-${i}`} />,
        text,
      ]);
    }
    
    // If the child is a valid React element:
    if (React.isValidElement(child)) {
      const element = child as React.ReactElement<any>;

      // For span elements, check if the content is only whitespace or empty.
      if (element.type === 'span') {
        const spanText = element.props.text || element.props.children;
        if (typeof spanText === 'string' && spanText.trim() === "") {
          return <br key={`br-${index}`} />;
        }
      }
      
      // Recursively process children of this element.
      const newProps = {
        ...element.props,
        children: element.props.children ? <TextWithBreaks>{element.props.children}</TextWithBreaks> : element.props.children,
      };
      return React.cloneElement(element, newProps);
    }
    
    return child;
  });
};

export const BlockText = ({ blocks }: { blocks: any[] }) => (
  <BlockContent
    blocks={blocks}
    serializers={{
      types: {
        block: (props: any) => {
          const { style = 'normal' } = props.node;
          let className = '';
          if (style === 'left') className = 'text-left';
          if (style === 'center') className = 'text-center';
          if (style === 'right') className = 'text-right';
          if (style === 'justify') className = 'text-justify';

          const childrenWithBreaks = <TextWithBreaks>{props.children}</TextWithBreaks>;

          if (style === 'h1') return <h1 className={className}>{childrenWithBreaks}</h1>;
          if (style === 'h2') return <h2 className={className}>{childrenWithBreaks}</h2>;
          if (style === 'h3') return <h3 className={className}>{childrenWithBreaks}</h3>;
          if (style === 'h4') return <h4 className={className}>{childrenWithBreaks}</h4>;
          if (style === 'h5') return <h5 className={className}>{childrenWithBreaks}</h5>;
          if (style === 'h6') return <h6 className={className}>{childrenWithBreaks}</h6>;
          if (style === 'blockquote') return <blockquote className={className}>{childrenWithBreaks}</blockquote>;

          return <p className={className}>{childrenWithBreaks}</p>;
        },
        list: (props: any) => {
          const { type } = props;
          const bullet = type === 'bullet';
          return bullet ? (
            <ul className="list-disc list-outside py-5 pl-[3rem]">{props.children}</ul>
          ) : (
            <ol className="list-decimal list-outside py-5 pl-[3rem]">{props.children}</ol>
          );
        },
        listItem: (props: any) => <li className="mb-2">{props.children}</li>,
        code: (props: any) => (
          <pre className="bg-gray-100 p-4 rounded" data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
        image: (props: any) => (
          <figure className="my-4">
            <img
              className="mx-auto"
              src={`https://cdn.sanity.io/images/${config.sanity.projectId}/production/${formatImage(props.node.asset._ref)}`}
              alt={props.node.alt}
            />
            {props.node.caption && (
              <figcaption className="text-center text-sm mt-2 text-gray-600">
                {props.node.caption}
              </figcaption>
            )}
          </figure>
        ),
      },
    }}
    hardBreak={true}
  />
);
