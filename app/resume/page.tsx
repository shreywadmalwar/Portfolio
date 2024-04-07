export default function Resume() {
    return (
        <div className="w-screen h-screen p-0 m-0">
            <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="PDF Viewer"
            />
        </div>
    );
}
