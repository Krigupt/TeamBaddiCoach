interface FeatureBoxProps {
  number: number;
  title: string;
}

export function FeatureBox({ number, title }: FeatureBoxProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-[300px] flex items-center justify-center">
      <h3 className="text-4xl font-bold text-center font-poppins">
        {title} {number}
      </h3>
    </div>
  )
} 