import Link from 'next/link'

export default function Kanban() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Planner (Kanban)</h1>
          <Link href="/"><a className="text-sm">Back</a></Link>
        </div>
      </header>
      <main className="container py-8">
        <div className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-medium">Kanban (UI stub)</h2>
          <p className="text-sm text-gray-600">Drag & drop and persistence require JavaScript logic and a backend (not included in scaffold).</p>

          <div className="mt-4 grid grid-cols-4 gap-4">
            <div className="p-3 bg-gray-50 rounded min-h-[200px]">Idea</div>
            <div className="p-3 bg-gray-50 rounded min-h-[200px]">Draft</div>
            <div className="p-3 bg-gray-50 rounded min-h-[200px]">Editing</div>
            <div className="p-3 bg-gray-50 rounded min-h-[200px]">Published</div>
          </div>
        </div>
      </main>
    </div>
  )
}
