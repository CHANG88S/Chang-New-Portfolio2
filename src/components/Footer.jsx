export const Footer = () => {
    return (
        <div className="max-w-3xl mx-auto flex justify-between items-center py-8">
            <div className="flex items-center">
                {/* Contact Info */}
                <h3 className="text-2xl font-bold pr-2 pb-1 text-white">Contact Me:</h3>
                <a 
                    href="mailto:chang88simon@gmail.com" 
                    className="text-white text-lg hover:underline">
                    chang88simon@gmail.com
                </a>
            </div>
            <div>
                {/* Copyright Notice */}
                <p className="text-white text-sm">© 2024 Simon Chang</p>
            </div>
        </div>
    );
};