import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewslettersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Newsletters</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Stay informed with our latest insights, industry updates, and workplace development tips.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-l-4" style={{ borderLeftColor: "#27586B" }}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle style={{ color: "#27586B" }}>
                    5 Essential Skills and Habits for Workplace Excellence
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">Latest Newsletter</p>
                </div>
                <span
                  className="px-3 py-1 text-xs font-semibold text-white rounded-full"
                  style={{ backgroundColor: "#27586B" }}
                >
                  Featured
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold mb-4" style={{ color: "#27586B" }}>
                  Have you ever thought about things to do well at work?
                </h3>
                <p className="text-gray-700 mb-4">
                  Well, if not, there's more than 20 things you can practice in the workplace, we selected the best
                  five. Developing positive work habits is important for anyone who wants to excel at their job and make
                  impactful contributions at work. Knowing what you do well at work can help you understand what value
                  you add to the company.
                </p>

                <h4 className="text-md font-semibold mb-3" style={{ color: "#27586B" }}>
                  Here are 5 skills and habits you can develop in the work space:
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800">1. Practice Self-Motivation</h5>
                    <p className="text-gray-700">
                      Self-motivated individuals strive toward clearly defined goals and tend to be engaged in their
                      work. Being driven shows that you can deliver optimal results without constant supervision.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800">2. Have a Positive Attitude</h5>
                    <p className="text-gray-700">
                      This can increase the likelihood of successful project outcomes. Being enthusiastic encourages
                      those around you to embrace a similar mindset, which can lead to more engagement from team members
                      who support one another.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800">3. Be Adaptive</h5>
                    <p className="text-gray-700">
                      Adaptability is the skill of altering one's approach to a situation when unexpected changes occur.
                      Being adaptable prepares you to face challenges productively. It can also show that you're
                      receptive to alternative ideas.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800">4. Be an Effective Teammate</h5>
                    <p className="text-gray-700">
                      Sharing ideas, holding yourself and others accountable and being receptive to new perspectives are
                      great ways to be an effective teammate. Being an effective teammate can inspire creativity,
                      promote learning, increase efficiency and cultivate strong workplace relationships.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800">5. Think Critically</h5>
                    <p className="text-gray-700">
                      It entails analyzing problems and coming up with targeted solutions. Every organization faces
                      challenges, so being able to come up with meaningful ideas allows you to contribute to successful
                      outcomes. Critical thinking is the basis for problem solving and innovation.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mt-4">
                  Although there are more, today we selected 5 crucial habits. It's important to know these things you
                  do well at work so you can understand the specific ways you contribute to your team, department and
                  organization. Knowing what you do well also helps you recognize areas for improvement.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#27586B" }}>
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest workplace development tips, industry insights, and training updates delivered to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
                />
                <Button style={{ backgroundColor: "#27586B" }} className="text-white hover:opacity-90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <p className="opacity-90">© 2025 Amasiko Group. All rights reserved. | Level 1 B-BBEE Enterprise</p>
        </div>
      </footer>
    </div>
  )
}
