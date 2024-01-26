import express from "express"
import userRoutes from "./routes/users.js"
import doctorRoutes from "./routes/doctor.js"
import campRoutes from "./routes/camp.js" 
import employeeRoutes from "./routes/employee.js"
import messageRoutes from "./routes/message.js"
import appointmentsRoutes from "./routes/appointments.js"
import patientRoutes from "./routes/patient.js"
import cors from "cors"
import bodyParser from "body-parser";


const DATA_FILE = 'appointments.json';
const app = express()
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data


app.use(express.json())
app.use(bodyParser.json());

app.use(cors())

app.use("/users", userRoutes)

app.use("/doctor", doctorRoutes)

app.use("/camp", campRoutes )

app.use("/Employee", employeeRoutes )

app.use("/", messageRoutes )


app.use("/api", appointmentsRoutes )

app.use("/api2", patientRoutes )



app.listen(8800)