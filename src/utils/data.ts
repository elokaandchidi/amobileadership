
type searchParams = {
  page: number,
  pageSize: number,
  searchTerm?: string,
}

export const participantsQuery = () => {  
  const query = `*[_type == "participant"] | order(_createdAt desc){
    _id,
    title,
    "schools" : school[] {
      name,
      "imageUrl": image.asset->url
    }
  }`;
  return query;
};

export const winnersTop3Query = () => {  
  const query = `*[_type == "winner"] | order(_createdAt desc)[0...2] {
    year,
    prizewinner[] {
      name,
      school,
      position,
      "year": ^.year, // Reference the year at the parent level
      "imageUrl": image.asset->url
    }
  }.prizewinner[]`;
  return query;
};

export const winnersQuery = () => {  
  const query = `*[_type == "winner"] | order(_createdAt desc){
    _id,
    year,
    "prizewinners" : prizewinner[] {
      name,
      school,
      position,
      "imageUrl": image.asset->url
    }
  }`;
  return query;
};

export const teamQuery = () => {
  const query = `*[_type == "team"] | order(_createdAt desc){
    _id,
    fullname,
    body,
    "imageUrl": image.asset->url,
    _createdAt
  }`;
  return query;
};

export const newsDetailQuery = (id: string) => {
    const query = `*[_type == "post" && _id == '${id}' && status == 'active'][0] {
      _id,
      title,
      publishedBy,
      publishedDate,
      "imageUrl": image.asset->url,
      body,
      _createdAt,
      "previous": *[_type == "post" && status == 'active' && _createdAt < ^._createdAt && _id != '${id}'] | order(_createdAt desc) [0] {
        _id,
        title,
        publishedBy,
        publishedDate,
        "imageUrl": image.asset->url,
        _createdAt
      },
      "next": *[_type == "post" && status == 'active' && _createdAt > ^._createdAt && _id != '${id}'] | order(_createdAt asc) [0] {
        _id,
        title,
        publishedBy,
        publishedDate,
        "imageUrl": image.asset->url,
        _createdAt
      }
    }`;
    return query;
 
};

export const newsDetailMoreQuery = (id: string) => {
  if (id) {
    const query = `*[_type == "post" && _id != '${id}' && status == 'active' ]| order(_createdAt desc) [0...3]{
      _id,
      title,
      publishedBy,
      publishedDate,
      "imageUrl": image.asset->url,
      body,
      _createdAt
    }`;
    return query;
  } else {
    const query = `*[_type == "post" && status == 'active' ]| order(_createdAt desc) [0...3]{
      _id,
      title,
      publishedBy,
      publishedDate,
      "imageUrl": image.asset->url,
      body,
      _createdAt
    }`;
    return query;
  }
};

export const newsQuery = ({page, pageSize}: searchParams) => {  
  const prev = (page - 1) * pageSize;
  const next = page * pageSize;
  
  const query = `*[_type == "post" && status == 'active'] | order(_createdAt desc) [${prev}...${next}]{
    _id,
    title,
    publishedBy,
    publishedDate,
    "imageUrl": image.asset->url,
    body,
    _createdAt
  }`;
  
  return query;
};

export const newSearchQuery = ({page, pageSize, searchTerm}: searchParams) => {
  const prev = (page - 1) * pageSize;
  const next = page * pageSize;
  const query = `*[_type == "post" && status == 'active' && title match '${searchTerm}*'] | order(_createdAt desc) [${prev}...${next}]{
    _id,
    title,
    publishedBy,
    publishedDate,
    "imageUrl": image.asset->url,
    body,
    _createdAt
  }`;

  return query;
};