import { useEffect, useState } from "react";
import style from "./SelectReserviation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SelectReserviation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState("");
    const [categ, setCateg] = useState("");
    const [done, setDone] = useState(true);

    useEffect(() => {
        // Safely retrieve and parse emailuser from localStorage
        const storedEmail = localStorage.getItem("emailuser");
        const parsedEmail = storedEmail ? JSON.parse(storedEmail) : null;
        setEmail(parsedEmail || "");
    }, []);

    const resturantDone = () => {
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: "ahmedessaam124@gmail.com",
                subject: `Message from Savor Restaurant`,
                message: `<p>name : ${name}</p>
                          <p>email : ${email}</p>
                          <p>time : ${time}</p>
                          <p>class : ${categ}</p>
                          <h3></h3>`,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    const DoneTime = () => {
        if (email) {
            resturantDone();

            fetch("https://sendmail-api-docs.vercel.app/api/send", {
                method: "POST",
                body: JSON.stringify({
                    to: `${email}`,
                    subject: `Message from Savor Restaurant`,
                    message: `<p>name : ${name}</p>
                              <p>email : ${email}</p>
                              <p>time : ${time}</p>
                              <p>class : ${categ}</p>
                              <h3>Keep this Message Please</h3>`,
                }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));

            setName("");
            setEmail("");
            setTime("");
            setCateg("");
            setDone(true);
        } else {
            setDone(false);
        }
    };

    const closeAlerte = () => {
        setDone(false);
    };

    return (
        <>
            {done ? (
                <div className={style.Alert}>
                    <div className={style.alertContent}>
                        <span>
                            <FontAwesomeIcon onClick={closeAlerte} icon={faX} />
                            <p>OOPS!</p>
                        </span>
                        <hr />
                        <h3>Sent successfully</h3>
                        <p className={style.ppp}>Keep the email</p>
                        <hr />
                        <span className={style.btnAler}>
                            <button onClick={closeAlerte}>Done</button>
                        </span>
                    </div>
                </div>
            ) : null}

            <section className={style.sectionTimeing}>
                <div className={style.content}>
                    <h2>Reservation your Appointment</h2>
                    <div className={style.form}>
                        <div className={style.inputDivOne}>
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className={style.inputDivOne}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={style.rowDiv}>
                            <div className={style.inputDivOne}>
                                <label>Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={style.inputDivOne}>
                                <label>Level of Reservation</label>
                                <select
                                    name="categ"
                                    value={categ}
                                    onChange={(e) => setCateg(e.target.value)}
                                    required
                                >
                                    <option value="a">A</option>
                                    <option value="b">B</option>
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={DoneTime}
                            className={style.btnsDone}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SelectReserviation;
