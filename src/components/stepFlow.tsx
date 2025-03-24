const steps = [
  {
    id: 1,
    title: "Step 1",
    text: "Every year we create new sets of questions and research materials on current events and topics for the competition."
  },
  {
    id: 2,
    title: "Step 2",
    text: "We provide students with questions, guides, and a month to prepare. Notes are allowed on 1 A4 page during the test."
  },
  {
    id: 3,
    title: "Step 3",
    text: "Participants will have the option to take a 2-hour test either online or in person under supervision."
  },
  {
    id: 4,
    title: "Step 4",
    text: "Your essays will be graded, ranked, and we offer optional individual feedback to help you improve."
  }
];

const StepCard = ({ step, isLeft }: { step: { id: number; title: string; text: string }, isLeft: boolean }) => {
  return (
    <div className="relative flex w-full items-center">
      {isLeft ? (
        <>
          <div className="w-1/2 flex justify-end">
            <div className="w-full bg-orange-500 text-white p-5 shadow-lg text-center">
              <h2 className="font-bold text-lg font-EB">{step.title}</h2>
              <p className="mt-4 text-sm">{step.text}</p>
            </div>
          </div>
          <div className="w-1/2"></div>
        </>
      ) : (
        <>
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-start">
            <div className="w-full bg-orange-500 text-white text-center p-5 shadow-lg">
              <h2 className="text-lg font-bold font-EB">{step.title}</h2>
              <p className="mt-4 text-sm">{step.text}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function StepsComponent() {
  return (
    <div className="relative w-full">
      <div className="font-EB font-semibold md:text-4xl text-3xl w-full leading-tight mb-5">How it Works</div>
      {steps.map((step, index) => (
        <StepCard key={step.id} step={step} isLeft={index % 2 === 0} />
      ))}
    </div>
  );
}
