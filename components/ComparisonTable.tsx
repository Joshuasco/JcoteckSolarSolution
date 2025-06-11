export default function ComparisonTable() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-3 px-4 text-left">Feature</th>
              <th className="py-3 px-4 text-left">Feisun 500W</th>
              <th className="py-3 px-4 text-left">Fuel Generator</th>
              <th className="py-3 px-4 text-left">Cheap Solar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              ['Noise Level', 'Silent', 'Loud (70dB+)', 'Silent'],
              ['Running Cost', '₦0 (Solar)', '₦5,000+/month', '₦0'],
              ['Battery Life', '10+ Years', '1-3 Years', '2-4 Years'],
              ['Setup Time', '5 Minutes', 'Fuel + Maintenance', '10+ Minutes'],
              ['Expandable', '✅', '❌', '❌']
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                {row.map((cell, j) => (
                  <td key={j} className="py-3 px-4">
                    {cell.includes('✅') ? (
                      <span className="text-green-500">✓</span>
                    ) : cell.includes('❌') ? (
                      <span className="text-red-500">✗</span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }