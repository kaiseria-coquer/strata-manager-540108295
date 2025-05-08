export default function GalleryPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Community Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/event1.jpg" alt="Event 1" className="rounded shadow hover:scale-105 transition-transform" />
          <img src="/event2.jpg" alt="Event 2" className="rounded shadow hover:scale-105 transition-transform" />
          <img src="/event3.jpg" alt="Event 3" className="rounded shadow hover:scale-105 transition-transform" />
        </div>
      </div>
    );
  }
  