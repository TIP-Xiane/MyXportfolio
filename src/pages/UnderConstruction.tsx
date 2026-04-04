import SectionWrapper from "@/components/SectionWrapper";

const UnderConstruction = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-4xl font-bold">🚧 Under Construction</h1>
        <p className="text-xl text-muted-foreground">
          This page is still being built. Check back soon!
        </p>
      </div>
    </SectionWrapper>
  );
};

export default UnderConstruction;
