import { DailyPrayerTime } from "@/types/DailyPrayerTimeType"

export default function PrayerTimes({
  today,
  tomorrow,
}: {
  today: DailyPrayerTime
  tomorrow: DailyPrayerTime
}) {
  const PrayerTimesArray = [
    {
      label: "Fajr",
      data: today.fajr,
      tomorrow: tomorrow.fajr,
    },
    {
      label: "Zuhr",
      data: today.zuhr,
      tomorrow: tomorrow.zuhr,
    },
    {
      label: "Asr",
      data: today.asr,
      tomorrow: tomorrow.asr,
    },
    {
      label: "Maghrib",
      data: today.maghrib,
      tomorrow: tomorrow.maghrib,
    },
    {
      label: "Isha",
      data: today.isha,
      tomorrow: tomorrow.isha,
    },
  ]

  return (
    <table className="text-white mx-auto table-auto border-collapse border-none w-full">
      <thead>
        <tr
          className="text-center [&>*]:p-2
          md:[&>*]:border [&>*]:border-mosqueGreen-dark
          [&>th]:border-t-0 [&>th:last-of-type]:border-r-0"
        >
          <th className="sr-only">Prayer time</th>
          <th>Begins</th>
          <th>Jama&apos;ah</th>
          <th className="hidden md:table-cell">Tomorrow</th>
        </tr>
      </thead>
      <tbody>
        {PrayerTimesArray.map((prayer) => (
          <tr
            key={prayer.label}
            className="
              text-center
              [&>*]:p-4
              md:[&>*]:border md:[&>*]:border-b-0 [&>*]:border-mosqueGreen-dark
              [&>th]:border-l-0 [&>th]:text-xl
              [&>td:last-of-type]:border-r-0
              border border-mosqueGreen-dark border-l-0 border-r-0
              last-of-type:border-b-0"
          >
            <th className="text-left text-2xl md:text-right">{prayer.label}</th>
            <td className="text-2xl">{prayer.data.start}</td>
            <td className="font-bold text-2xl">
              {prayer.data.congregation_start}
            </td>
            <td className="text-2xl hidden md:table-cell">
              {prayer.tomorrow.congregation_start}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}