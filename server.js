const express = require("express");
const server = express();
const cors = require("cors");
const projectdb = require("./data/helpers/projectModel");
const actiondb = require("./data/helpers/actionModel");

server.use(express.json());
server.use(cors());

server.get("/project", async (req, res) => {
	try {
		let data = await projectdb.get();
		if (data.length > 0) {
			return res.status(200).json(data);
		}
		return res.status(404).json({ message: "Bad request" });
	} catch (err) {
		res.status(500).json(err);
	}
});

server.get("/project/:id", async (req, res) => {
	try {
		let data = await projectdb.get(req.params.id);
		if (data.id) {
			return res.status(200).json(data);
		}
		return res.status(404).json({ message: "Bad request" });
	} catch (err) {
		res.status(500).json(err);
	}
});

server.get("/project/actions/:id", async (req, res) => {
	try {
		let data = await projectdb.getProjectActions(req.params.id);
		if (data) {
			return res.status(200).json(data);
		}
		return res.status(404).json({ message: "No id" });
	} catch (err) {
		res.status(500).json(err);
	}
});

server.post("/project", async (req, res) => {
	if (!req.body.name || !req.body.description) {
		return res
			.status(400)
			.json({ message: "One or more keys not recieved" });
	}

	try {
		let data = await projectdb.insert(req.body);
		return res.status(201).json({
			id: data.id,
			name: data.name,
			description: data.description,
			completed: data.completed,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

server.put("/project/:id", async (req, res) => {
	try {
		let data = await projectdb.update(req.params.id, req.body);
		console.log(data);
		console.log(req.body);
		if (data.id > 0) {
			return res.json({
				id: data.id,
				name: data.name,
				description: data.description,
				completed: data.completed,
			});
		} else {
			return null;
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

server.delete("/project/:id", async (req, res) => {
	try {
		let data = await projectdb.remove(req.params.id);
		console.log(data);
		console.log(res);
		if (data > 0) {
			return res.status(200).json({ message: "Project removed" });
		}
		return res
			.status(404)
			.json({ message: "This project ID doesn't exist" });
	} catch (err) {
		res.status(500).json(err);
	}
});

server.get("/actions", async (req, res) => {
	try {
		let data = await actiondb.get();
		console.log(data);
		if (data.length > 0) {
			return res.status(200).json(data);
		}
		return res.status(404).json({ message: "Bad request" });
	} catch (err) {
		res.status(500).json(err);
	}
});

server.listen(6000, () =>
	console.log("\n This server is listening on port 6k \n"),
);
