import { Navbar } from "@/components/Navbar"
import { LoanForm } from "@/components/form/form"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-[calc(100vh-52px)]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/man.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 py-6 min-h-[calc(100vh-52px)] flex flex-col">
          <div className="flex-1 flex items-center justify-start">
            <LoanForm />
          </div>

          <div className="text-white text-sm text-center md:text-left mt-auto py-4">
            <p>
              Need assistance? Kindly call these numbers: 08050936886, 08090443986, <br /> 08133591259, 09128834589,
              09065703751, 09068631567, 07066900271
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

