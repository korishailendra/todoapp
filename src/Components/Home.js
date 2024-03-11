import React, { useState } from "react";
import "../Components/Style.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import buttonadd from "../Components/Svg/buttonadd.svg"
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import zerotask from "../Components/Svg/zerotask.svg"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    const [todos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDetail, setNewDetail] = useState("");

    const [editingIndex, setEditingIndex] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");
    const [editingDetail, setEditingDetail] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const addTodo = () => {
        if (newTitle.trim() !== "" && newDetail.trim() !== "") {
            setTodos([...todos, { title: newTitle, detail: newDetail }]);
            setNewTitle("");
            setNewDetail("");
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        setOpen(false);
    };

    const updateTodo = (index, updatedTitle, updatedDetail) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = { title: updatedTitle, detail: updatedDetail };
        setTodos(updatedTodos);
    };

    const handleEdit = (index, title, detail) => {
        setEditingIndex(index);
        setEditingTitle(title);
        setEditingDetail(detail);
    };

    const handleSave = (index) => {
        updateTodo(index, editingTitle, editingDetail);
        setEditingIndex(null);
    };

    return (
        <>


            <div className="container sd "  >


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={1} sm={3}></Grid>
                        <Grid xs={8} sm={5}>
                            <input
                                className="titlecss"
                                type="text"
                                placeholder="Title..."
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />

                            <input
                                type="text"
                                className="detailcss mt-2 "
                                placeholder="input..."
                                value={newDetail}
                                onChange={(e) => setNewDetail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} sm={2} >
                            <Box className="boxcss">
                                <img onClick={addTodo} className="imgcss" src={buttonadd} />
                                {/* <button onClick={addTodo} className="btncss">
                                    <i class="bi bi-plus" style={{ color: "#FF8303" }}></i>
                                    <img src={buttonadd} />
                                    </button> */}

                            </Box>
                        </Grid>


                    </Grid>
                </Box>


            </div>

            <div className=" datacss">
                {todos.length === 0 &&
                <div className="container notask" style={{textAlign:"center"}}><img src={zerotask} sx={{}} className="img-fluid"/></div>
                 
                 }
                <Grid container style={{ marginBottom: "1%" }}>
                    {todos.map((todo, index) => (
                        <Grid item sm={4} xs={12} sx={{ padding: "2%" }} key={index}>



                            <Grid container style={{ border: "2px solid #A35709", backgroundColor: "#242320", borderRadius: "8px" }}  >

                                {editingIndex === index ? (

                                    <>
                                        <Grid sm={8} xs={8} sx={{ padding: "9px 8px 8px 14px" }}>
                                            <input
                                                type="text"
                                                className="editcsstwo"
                                                value={editingTitle}
                                                style={{ backgroundColor: "#242320" }}
                                                onChange={(e) => setEditingTitle(e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                className="editcsstwoo mt-1 "
                                                style={{ backgroundColor: "#242320", marginBottom: "2px" }}
                                                value={editingDetail}
                                                onChange={(e) => setEditingDetail(e.target.value)}
                                            />
                                        </Grid>


                                        <Grid sm={4} xs={4} style={{ textAlign: "center", alignSelf: "center" }}>
                                            <button onClick={() => handleSave(index)} className="updatecss">Update</button>
                                        </Grid>





                                    </>
                                ) : (

                                    <>
                                        <Grid xs={8} sm={8} sx={{ padding: "9px 0px 0px 14px" }}>

                                            <h1 className="titlecssupdate truncate-text "> {todo.title}</h1>
                                            <p className="inputcss truncate-text ">{todo.detail}</p>
                                        </Grid>
                                        <Grid xs={4} sm={4} style={{ textAlign: "center", alignSelf: "center" }}>
                                            <button onClick={() => handleEdit(index, todo.title, todo.detail)} className="editcss " ><EditIcon sx={{ color: "white", margin: "2px" }} /></button>
                                            <button className="dellcss" onClick={handleClickOpen}>
                                                <CloseIcon sx={{ color: "#FF8303", }} />
                                            </button>
                                        </Grid>


                                    </>
                                )}

                            </Grid>

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title" sx={{ color: "white" }}>
                                    {"Delete this task?"}
                                </DialogTitle>

                                <DialogActions sx={{ alignSelf: "center" }}>
                                    <Button onClick={() => deleteTodo(index)} className="dilogabtncss" >Yes</Button>
                                    <Button onClick={handleClose} className="dilogabtncss" >
                                        No
                                    </Button>
                                </DialogActions>
                            </Dialog>


                        </Grid>
                    ))}
                </Grid>
            </div >
        </>
    );
}

export default Home;
