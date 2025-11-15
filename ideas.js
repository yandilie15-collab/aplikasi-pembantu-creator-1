import Link from 'next/link'

export default function Ideas() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Ideas Hub</h1>
          <Link href="/"><a className="text-sm">Back</a></Link>
        </div>
      </header>
      <main className="container py-8">
        <div className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-medium">AI Idea Generator (stub)</h2>
          <p className="text-sm text-gray-600 mt-2">This UI is a placeholder. Integrate OpenAI or other AI backend to generate ideas.</p>

          <div className="mt-4">
            <label className="block text-sm">Topic / Niche</label>
            <input className="mt-1 p-2 border rounded w-full" placeholder="e.g. edukasi sains, resep masakan" />
            <div className="mt-3 flex gap-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded">Generate</button>
              <button className="px-4 py-2 border rounded">Save Idea</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
