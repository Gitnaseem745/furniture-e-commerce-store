'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaGreaterThan } from 'react-icons/fa6'
interface BreadCrumbProps {
    hoverColor?: string
}
const BreadCrumb: React.FC<BreadCrumbProps> = ({ hoverColor = '#274C4F' }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className="flex items-center space-x-2 text-[12px] font-semibold uppercase">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className={`hover:underline hover:text-[${hoverColor}]`}>
            Home
          </Link>
        </li>
        {pathSegments.map((segment, i) => {
          const href = '/' + pathSegments.slice(0, i + 1).join('/');
          const isLast = i === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="px-2 text-gray-400"><FaGreaterThan /></span>
              {isLast ? (
                <span className={`text-['#1F2937' || ${hoverColor}]`}>
                  {segment.replace(/-/g, ' ')}
                </span>
              ) : (
                <Link href={href} >
                  {segment.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
        {searchParams && searchParams.toString() && (
          <li className="flex items-center">
            <span className={`text-['#1F2937' || ${hoverColor}]`}>{searchParams.toString()}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}
export default BreadCrumb;
