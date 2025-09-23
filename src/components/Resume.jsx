export const Resume = () => {
    return (
    <div className="max-w-3xl mx-auto z-30 justify-center pb-4">
        <div className="flex items-center pb-8">
            <h1 id="resume" className="text-3xl font-bold scroll-mt-20">Resume</h1>
        </div>
        
        <iframe 
        src="/resume.pdf#toolbar=0&navpanes=0" 
        type="application/pdf" 
        width="100%" 
        height="1000px" 
        style={{ border: 'none' }}
      />
    </div>
    );
};