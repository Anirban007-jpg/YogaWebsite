import styles from "../styles/Classes.module.css";


const Classes = () => {
    return ( <section className={styles.classSection}>
        <h2>Online classes</h2>
        {/* <div className={styles.classContainer}>
            <div>
                <h4>Zoom 45 mins</h4>
                
            </div>
            <div className={styles.classInfo}>
                <p>Wednesday</p><p>8pm</p><p></p>
            </div>
        </div>
        <div className={styles.classContainer}>
            <div>
                <h4>Rest and Restore via Vedio Call 1 hour</h4>
                </div>
            <div className={styles.classInfo}>
                <p>Thursday</p><p>8pm</p><p></p>
            </div>
        </div> */}
        <h2>Offline classes</h2>
        <div className={styles.classContainer}>
            <div className={styles.classInfo}>
                <h4>At Home</h4>
                
            </div>
            <div className={styles.classInfo}>
                <p className="font-bold justify-between">Mon to Fri</p>{" "}<p className="font-bold">5 pm</p><p></p>
            </div>
        </div>
        
   
        <div className={styles.classInformation}>
            <h2>Class Information</h2>
            <ul>
                <li>Bring water and wear loose, stretchy clothing.</li>
                <li>Leave at least two hours between eating a meal and practising yoga.</li>
                <li>If it is your first ever yoga class, or you are anxious about joining us for the first time, please don’t be! A warm welcome awaits you.</li>
            </ul>
        </div>
    </section> );
}
 
export default Classes;