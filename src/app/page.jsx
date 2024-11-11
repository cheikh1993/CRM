import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/Card/SideBar'
import ChartP from '@/components/Chart/ChartP'
import CardMeeting from '@/components/CardMeeting/page'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className="top">
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.leftInfo}>
            <select className={styles.select}>
              <option value="">sep 51,2024 - Sep 30, 2024 </option>
              <option value="">sep 09,2024 - Sep 30, 2024 </option>
              <option value="">sep 20,2024 - Sep 30, 2024 </option>
              <option value="">sep 17,2024 - Sep 30, 2024 </option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Calendar-Edit-1--Streamline-Ultimate" height="24" width="24"><desc>Calendar Edit 1 Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M22.63 14.786 15 22.416l-3.75 0.75 0.75 -3.75 7.63 -7.63c0.3968 -0.3967 0.9349 -0.6195 1.496 -0.6195s1.0992 0.2228 1.496 0.6195l0.008 0.008c0.1967 0.1964 0.3527 0.4296 0.4591 0.6863 0.1065 0.2567 0.1613 0.5318 0.1613 0.8097 0 0.2779 -0.0548 0.5531 -0.1613 0.8098 -0.1064 0.2567 -0.2624 0.4899 -0.4591 0.6862Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M9 17.25H2.25c-0.39782 0 -0.77936 -0.158 -1.06066 -0.4393C0.908035 16.5294 0.75 16.1478 0.75 15.75V3.76501c0 -0.39782 0.158035 -0.77935 0.43934 -1.06066 0.2813 -0.2813 0.66284 -0.43934 1.06066 -0.43934h13.5c0.3978 0 0.7794 0.15804 1.0607 0.43934 0.2813 0.28131 0.4393 0.66284 0.4393 1.06066v4.485" stroke-width="1.5"></path><path stroke="#000000" stroke-linejoin="round" d="M0.75 6.75h16.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M5.24298 3.75v-3" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12.743 3.75v-3" stroke-width="1.5"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Ringing-Bell-Notification--Streamline-Core" height="14" width="14"><desc>Ringing Bell Notification Streamline Icon: https://streamlinehq.com</desc><g id="ringing-bell-notification--notification-vibrate-ring-sound-alarm-alert-bell-noise"><path id="Vector" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M6 13.25h2" stroke-width="1"></path><path id="Vector_2" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M11 5.75c0 -1.06087 -0.4214 -2.07828 -1.17157 -2.82843C9.07828 2.17143 8.06087 1.75 7 1.75s-2.07828 0.42143 -2.82843 1.17157C3.42143 3.67172 3 4.68913 3 5.75v3.5c0 0.39782 -0.15804 0.7794 -0.43934 1.0607S1.89782 10.75 1.5 10.75h11c-0.3978 0 -0.7794 -0.158 -1.0607 -0.4393S11 9.64782 11 9.25v-3.5Z" stroke-width="1"></path><path id="Vector_3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M0.5 5.62c0.000539 -0.95186 0.227534 -1.88993 0.66224 -2.73673C1.59694 2.03647 2.22687 1.30525 3 0.75" stroke-width="1"></path><path id="Vector_4" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.62c-0.0005 -0.95186 -0.2275 -1.88993 -0.6622 -2.73673S11.7731 1.30525 11 0.75" stroke-width="1"></path></g></svg>

          </div>
        </div>
        <div className={styles.cardContainer}>
          <Card
            color={"#FFF9EEFF"}
            colorBackgroundIcon={"#FAB740FF"}
            price={"10"}
            desc={"9 closed deasls"}
            shadowColor={"#fab740"}

          />
          <Card
            color={"#F5F9F5FF"}
            colorBackgroundIcon={"#75AF73FF"}
            price={"15"}
            desc={"New deals"}
            shadowColor={"#75af73"}



          />
          <Card
            color={"#FFF1F0FF"}
            colorBackgroundIcon={"#FE8C81FF"}
            price={"13"}
            desc={"Est. revenue "}
            shadowColor={"#fe8c81"}



          />
          <Card
            color={"#F1F5FEFF"}
            colorBackgroundIcon={"#4B7BECFF"}
            price={"5"}
            desc={"Est. profit"}
            shadowColor={"#4b7bec"}



          />
        </div>
        <div className={styles.chartContainer}>
          <ChartP
            type="line"
            title={"Deal Funnel"}
            lineBool={false}

          />
          <ChartP
            type="other"
            title={"Opportunity Stage"}
            lineBool={false}

          />
        </div>

      </div>
      <div className={styles.midle}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Revenue vs Leads</h2>
          <div className={styles.revuLead}>
            <p>Revu</p>
            <span className={styles.revu}></span>

            <p>Lead</p>
            <span className={styles.lead}></span>
          </div>
        </div>
        <ChartP type={"bar"} title={""} lineBool={false}
/>
      </div>
      <div className={styles.bottom}>
        <ChartP
          type={"line"}
          title={"Profit"}
          lineBool={true}
        />
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>4 meetings today</h2>
          <div className={styles.cardMeetingContainer}>
            <CardMeeting
              startTime={"in 10 min"}

              message={"Internal perparation meeting"}
              time={"08:00 - 09:00 AM"}
              backgroundColor={"#F1F5FEFF"}
            />
            <CardMeeting
            startTime={""}
              message={"Internal perparation meeting"}
              time={"08:00 - 09:00 AM"}
              backgroundColor={"#FFF9EEFF"}

            />
            <CardMeeting 
              startTime={""}
              backgroundColor={"#F5F9F5FF"}
              message={"External meeting - Negotiation"}
              time={"03:00 - 04:00 PM"}

            />
          </div>
        </div>
      </div>
    </div>
  )
}
