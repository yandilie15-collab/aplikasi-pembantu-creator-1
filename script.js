import Link from 'next/link'

export default function Script() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Script Builder</h1>
          <Link href="/"><a className="text-sm">Back</a></Link>
        </div>
      </header>
      <main className="container py-8">
        <div className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-medium">AI Script Generator (stub)</h2>
          <p className="text-sm text-gray-600 mt-2">Enter a topic and select a style to generate a script.</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Topic</label>
              <input className="mt-1 p-2 border rounded w-full" placeholder="Topik konten" />
            </div>
            <div>
              <label className="block text-sm">Style</label>
              <select className="mt-1 p-2 border rounded w-full">
                <option>Educative</option>
                <option>Storytelling</option>
                <option>Comedy</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <textarea className="w-full p-3 border rounded h-40" placeholder="Generated script will appear here (server-side AI integration required)"></textarea>
            <div className="mt-3">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded">Generate</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
