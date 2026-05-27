import Image from 'next/image'

interface SkewedImageProps {
  src?:       string
  alt?:       string
  children?: React.ReactNode
  className?: string
  priority?: boolean
  variant?:  'default' | 'wide' | 'square'
}

// Adjusted polygons to have a straight right edge and slanted top/bottom/left edges
const SKEW: Record<string, string> = {
  default: 'polygon(23% 4%, 90% 1%, 90% 100%, 7% 100%)',
  wide:    'polygon(15% 4%, 93% 1%, 93% 100%, 5% 100%)',
  square:  'polygon(23% 4%, 90% 1%, 90% 100%, 7% 100%)',
}

const RATIO: Record<string, string> = {
  default: '4 / 3',
  wide:    '16 / 9',
  square:  '1 / 1',
}

export default function SkewedImage({
  src, alt = '', children,
  className = '', priority = false,
  variant = 'default',
}: SkewedImageProps) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        aspectRatio:     RATIO[variant],
        backgroundColor: '#1e3a8a', /* Blue corners (adjust to your Tailwind or CSS variable) */
        clipPath: 'polygon(0 100%, 0% 0%, 100% 0%, 92% 100%)' 
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath:        SKEW[variant],
          backgroundColor: '#f59e0b', /* Orange shape (adjust to your Tailwind or CSS variable) */
        }}
      >
        {src && (
          <Image
            src={src} alt={alt} fill priority={priority}
            className="object-cover"
          />
        )}
        {children && (
          <div className="absolute inset-0">{children}</div>
        )}
      </div>
    </div>
  )
}