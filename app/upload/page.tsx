'use client';

export default function UploadPage() {
  const uploadsEnabled = process.env.NEXT_PUBLIC_ENABLE_PUBLIC_UPLOADS === 'true';

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Public Uploads</h1>
      {uploadsEnabled ? (
        <form className="space-y-4">
          <label>
            Upload File:
            <input type="file" className="block mt-2" />
          </label>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      ) : (
        <p className="text-red-500 font-semibold">
          Uploads are currently disabled by admin.
        </p>
      )}
    </div>
  );
}
