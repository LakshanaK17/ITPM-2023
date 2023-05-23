import "./Stationery.css";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  Typography,
  Icon,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";
import stationeryList from "../../utils/stationeryList";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Pen1 from "../../assets/pen1.jpg";
import AddStationery from "./AddStationery";
import StationeryListView from "../../components/admin/StationeryListView";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Stationery = () => {
  const [tabValue, setTabValue] = useState("All");
  const [stationeryDialog, setStationeryDialog] = useState(false);
  const [addStationery, setAddStationery] = useState(false);

  const navigate = useNavigate();

  const navigateToSummary = () => {
    navigate("/addStationery");
  };

  const navigateToList = () => {
    navigate("/adminstationerylist");
  };

  const handleClickOpen = () => {
    setAddStationery(true);
    // alert("OKAYYYYYYYYYYYY");
  };

  const handleClose = () => {
    setAddStationery(false);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={1} className="section pb_45 pt_45">
        {/* Title */}
        <Grid item className="section_title mb_20">
          <span></span>
          <h2 className="section_title_text">
            Stationery Items that can be donated
          </h2>
        </Grid>
        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="customTabs"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue == "All" ? "customTabs_item active" : "customTabs_item"
              }
            />

            {[
              ...new Set(stationeryList.stationeries.map((item) => item.tag)),
            ].map((tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            ))}
          </Tabs>

          {/* Stationeries */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {stationeryList.stationeries.map((stationery) => (
                <>
                  {tabValue == stationery.tag || tabValue == "All" ? (
                    <Grid item xs={12} sm={6} md={4}>
                      <Grow in timeout={1000}>
                        <Card
                          className="customCard"
                          onClick={() => setStationeryDialog(stationery)}
                        >
                          <CardActionArea>
                            <CardMedia
                              className="customCard_image"
                              image={stationery.image}
                              title={stationery.title}
                            />
                            <CardContent>
                              <Typography
                                variant={"body2"}
                                className="customCard_title"
                              >
                                {stationery.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                className="customCard_caption"
                              >
                                {stationery.caption}
                              </Typography>
                              <Button
                                variant="contained "
                                alignItems="center"
                                sx={{
                                  color: "blue",
                                  backgroundColor: "#FFDFD3",
                                  borderColor: "#FFDFD3",
                                }}
                              >
                                VIEW
                              </Button>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grow>
                    </Grid>
                  ) : null}
                </>
              ))}
            </Grid>
          </Grid>
          {/* Dialog */}
          <Dialog
            open={Boolean(stationeryDialog)}
            onClose={() => setStationeryDialog(false)}
            className="stationeryDialog"
            maxWidth={"lg"}
            fullWidth
          >
            <DialogTitle onClose={() => setStationeryDialog(false)}>
              {stationeryDialog.title}
            </DialogTitle>

            <DialogContent style={{ height: "80vh" }}>
              {stationeryDialog.images && (
                <ImageGallery images={stationeryDialog.images} />
              )}
              <Typography className="stationeryDialog_description">
                {stationeryDialog.description}
              </Typography>
              <Button
                variant="contained "
                sx={{
                  color: "blue",
                  backgroundColor: "#FFDFD3",
                  borderColor: "#FFDFD3",
                }}
                onClick={handleClickOpen}
              >
                DONATE
              </Button>
              <Dialog
                open={addStationery}
                onClose={handleClose}
                PaperProps={{ sx: { width: "30%", height: "50%" } }}
              >
                <DialogTitle
                  style={{ fontSize: "25px", alignContent: "center" }}
                >
                  Add
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {stationeryDialog.title}
                  </DialogContentText>
                  <DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Quantity"
                      type="number"
                    />
                  </DialogContentText>
                  <DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      type="text"
                    />
                  </DialogContentText>
                  <DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Contact Number"
                      type="text"
                    />
                  </DialogContentText>
                  <DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                    />
                  </DialogContentText>
                  <DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Address"
                      type="text"
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained "
                    sx={{
                      color: "blue",
                      backgroundColor: "#FFDFD3",
                      borderColor: "#FFDFD3",
                    }}
                    onClick={navigateToSummary}
                  >
                    Confirm
                  </Button>
                  <Routes>
                    <Route path="/addStationery" element={<AddStationery />} />
                  </Routes>
                </DialogActions>
              </Dialog>
            </DialogContent>
            <DialogActions className="stationeryDialog_actions">
              {/* {stationeryDialog?.links?.map((link) => (
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="stationeryDialog_icon"
              >
                {link.icon}
              </a>
            ))} */}
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};

export default Stationery;
