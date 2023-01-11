const express = require("express");
const AccountJSON = require("./json/account.json");
const AccountContactJSON = require("./json/accountContact.json");
const AccountEmployeeJSON = require("./json/accountEmployee.json");
const AccountLocationJSON = require("./json/accountLocation.json");
const ActivityJSON = require("./json/activity.json");
const ActivityTypeJSON = require("./json/activityType.json");
const ContactJSON = require("./json/contact.json");
const EmployeeJSON = require("./json/employee.json");
const LeadJSON = require("./json/lead.json");
const LeadSourceJSON = require("./json/leadSource.json");
const LocationJSON = require("./json/location.json");
const OpportunityJSON = require("./json/opportunity.json");
const OpportunityTypeJSON = require("./json/opportunityType.json");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to Dummy API");
});

app.get("/account", (req, res) => res.json(AccountJSON));
app.get("/accountContact", (req, res) => res.json(AccountContactJSON));
app.get("/accountEmployee", (req, res) => res.json(AccountEmployeeJSON));
app.get("/accountLocation", (req, res) => res.json(AccountLocationJSON));
app.get("/accountLocation", (req, res) => res.json(AccountLocationJSON));
app.get("/activity", (req, res) => res.json(ActivityJSON));
app.get("/activityType", (req, res) => res.json(ActivityTypeJSON));
app.get("/contact", (req, res) => res.json(ContactJSON));
app.get("/employee", (req, res) => res.json(EmployeeJSON));
app.get("/lead", (req, res) => res.json(LeadJSON));
app.get("/leadSource", (req, res) => res.json(LeadSourceJSON));
app.get("/location", (req, res) => res.json(LocationJSON));
app.get("/opportunity", (req, res) => res.json(OpportunityJSON));
app.get("/opportunityType", (req, res) => res.json(OpportunityTypeJSON));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
