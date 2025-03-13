import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="relative min-h-[calc(100vh-68px)]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/man.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-[calc(100vh-68px)] flex flex-col">
      <div className="flex-1 flex items-center justify-start">
      <Card className="w-full max-w-md shadow-lg border-0 rounded-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">
                Get A Loan In 5 Minutes
                <div className="mt-2 h-1 w-full max-w-[240px] mx-auto bg-gray-300" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="employer" className="text-sm font-medium">
                  Select employer
                </label>
                <Select>
                  <SelectTrigger id="employer" className="w-full">
                    <SelectValue placeholder="Select employer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employer1">Employer 1</SelectItem>
                    <SelectItem value="employer2">Employer 2</SelectItem>
                    <SelectItem value="employer3">Employer 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Enter amount
                </label>
                <Input id="amount" type="text" placeholder="Enter amount" />
              </div>

              <div className="space-y-2">
                <label htmlFor="duration" className="text-sm font-medium">
                  Duration
                </label>
                <Select>
                  <SelectTrigger id="duration" className="w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1month">1 Month</SelectItem>
                    <SelectItem value="3months">3 Months</SelectItem>
                    <SelectItem value="6months">6 Months</SelectItem>
                    <SelectItem value="12months">12 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-blue-700 hover:bg-blue-800">Continue</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-white text-sm text-center md:text-left mt-auto py-4">
          <p>
            Need assistance? Kindly call these numbers: 08050936886, 08090443986, <br/> 08133591259, 09128834589, 09065703751,
            09068631567, 07066900271
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
