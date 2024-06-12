const currentDate = new Date()
const oneDay = 24 * 60 * 60 * 1000
// Define dummyData using the pre-generated random dates
export const dummyData = []

const Data = {
  CAMPAIGN: [
    {
      name: "Tommy",
      score: 20,
      date: new Date(currentDate.getTime() - oneDay * 0 - 123456),
    },
    {
      name: "Bob",
      score: 15,
      date: new Date(currentDate.getTime() - oneDay * 1 - 654321),
    },
    {
      name: "Joe",
      score: 25,
      date: new Date(currentDate.getTime() - oneDay * 2 - 789012),
    },
    {
      name: "TESTER",
      score: 12,
      date: new Date(currentDate.getTime() - oneDay * 3 - 345678),
    },
    {
      name: "ahri",
      score: 8,
      date: new Date(currentDate.getTime() - oneDay * 4 - 901234),
    },
    {
      name: "zyra",
      score: 18,
      date: new Date(currentDate.getTime() - oneDay * 5 - 234567),
    },
    {
      name: "swain",
      score: 22,
      date: new Date(currentDate.getTime() - oneDay * 6 - 456789),
    },
  ],
  SKIRMISH: [
    {
      name: "mary",
      score: 8,
      date: new Date(currentDate.getTime() - oneDay * 4 - 901234),
    },
    {
      name: "jane",
      score: 18,
      date: new Date(currentDate.getTime() - oneDay * 5 - 234567),
    },
    {
      name: "cleo",
      score: 22,
      date: new Date(currentDate.getTime() - oneDay * 6 - 456789),
    },
  ],
  ARENA: [
    {
      name: "yorick",
      score: 10,
      date: new Date(currentDate.getTime() - oneDay * 7 - 567890),
    },
    {
      name: "teemo",
      score: 28,
      date: new Date(currentDate.getTime() - oneDay * 8 - 678901),
    },
  ],
}
