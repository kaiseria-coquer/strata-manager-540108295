export default function DocumentsPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Shared Documents</h1>
        <ul className="list-disc list-inside">
          <li><a className="text-blue-600 underline" href="#">Fire Safety Guidelines (PDF)</a></li>
          <li><a className="text-blue-600 underline" href="#">Annual Budget (PDF)</a></li>
          <li><a className="text-blue-600 underline" href="#">Strata Bylaws (PDF)</a></li>
        </ul>
      </div>
    );
  }
  