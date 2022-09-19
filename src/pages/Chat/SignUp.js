import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword,
	updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar'
import { Paper } from "@mui/material";


const theme = createTheme();

export default function SignUp() {
const [username, setUsername] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");

const navigate = useNavigate();
const handleSubmit = async (event) => {
	event.preventDefault();

	try {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	);
	const update = await updateProfile(auth.currentUser, {
		displayName: username,
	});

	const user = userCredential.user;

	setDoc(doc(db, "users", user.uid), {
		username: username,
		email: email,
		userId: user.uid,
		timestamp: new Date(),
	});

	navigate("/chat/signin");
	} catch (error) {
	alert(error.message);
	}
};

return (
	<>
		<Box
  sx={{
    display: "flex",
    width: "100%",
    backgroundColor: (theme) =>
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
  }}
>
  <NavBar />
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      overflow: "auto",
      mt: 14,
      ml: 4,
      mb: 3,
    }}
  >
    <Box sx={{ mr: 4.2, mt: 0}} md={12}>
		
    <Paper sx={{ mt: 3 }}> 
	<Container component="main" maxWidth="xs">
		<CssBaseline />
		<Box
		sx={{
			// marginTop: 8,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		}}
		>
		<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
			<LockOutlinedIcon />
		</Avatar>
		<Typography component="h1" variant="h5">
			Sign up
		</Typography>
		<Box
			component="form"
			noValidate
			onSubmit={handleSubmit}
			sx={{ mt: 3 }}
		>
			<Grid container spacing={2}>
			<Grid item xs={12}>
				<TextField
				autoComplete="given-name"
				name="firstName"
				required
				fullWidth
				id="firstName"
				label="First Name"
				autoFocus
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				/>
			</Grid>

			<Grid item xs={12}>
				<TextField
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="new-password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				/>
			</Grid>
			</Grid>
			<Button
			type="submit"
			fullWidth
			variant="contained"
			sx={{ mt: 3, mb: 2 }}
			>
			Sign Up
			</Button>
			<Grid container justifyContent="flex-end">
			<Grid item>
				<Link href="/" variant="body2">
				Already have an account? Sign in
				</Link>
			</Grid>
			</Grid>
		</Box>
		</Box>
		{/* <Copyright sx={{ mt: 5 }} /> */}
	</Container>
	</Paper>
	</Box>
	
	</Box>
	</Box>
	</>
);
}
