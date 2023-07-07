import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EditBox = () => {
  const [openEditBox, setOpenEditBox] = React.useState(false);

  const handleClickOpenEditBox = () => {
    setOpenEditBox(true);
  };

  const handleCloseEditBox = () => {
    setOpenEditBox(false);
  };

  return (
    <div>
        <Dialog
         open={openEditBox} 
         aria-labelledby="customized-dialog-title"
         onClose={handleCloseEditBox}
         sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "715px",  // Set your width here
              },
            },
            "& .MuiDialog-paper": {
                height:"657px"
            }
          }}
        >
          <DialogContent
            sx={{
                padding:'0',
                display:"flex",
                flexDirection:'column'
            }}
          >
            <div className="header-editbox">
                <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseEditBox}
                aria-label="close"
                sx={{
                    position: "absolute",
                    top: 20,
                    right: 25,
                }}
                >
                <CloseIcon />
                </IconButton>
            </div>
            <div className="contain-editbox">

            </div>
            <div className="footer-editbox">

            </div>
          </DialogContent>
        </Dialog>
      <button className="button-setting-collection" onClick={handleClickOpenEditBox}>
        <p style={{ fontFamily: "arial", fontSize: "15px", margin: "auto" }}>
          <b>Chỉnh sửa bộ sưu tập đáng chú ý</b>
        </p>
      </button>
    </div>
  );
};

export default EditBox;
