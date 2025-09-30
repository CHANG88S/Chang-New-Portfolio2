export const Resume = () => {
    return (
    <div className="w-full md:max-w-3xl max-w-sm mx-auto z-30 justify-center pb-4">
        <div className="flex items-center pb-8">
            <h1 id="resume" className="text-3xl font-bold scroll-mt-20">Resume</h1>
        </div>
        
        <iframe 
            src={`${import.meta.env.BASE_URL}resume.pdf#toolbar=0&navpanes=0`}
            className="w-full h-[400px] md:h-[1000px] rounded-md" 
            type="application/pdf" 
            style={{ border: 'none' }}
      />
    </div>
    );
};