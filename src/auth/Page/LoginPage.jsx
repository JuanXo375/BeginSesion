import { Card, Checkbox, Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { object,string } from "yup"; 
import { registerUserWithEmailPassword } from "../../firebase/providers";
import { chekingAuthentications, startCreatingUserWithEmailPassword, startGoogleSignIn } from "../../store/auth/thunks";

const LoginPage = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.auth);
  const [Visible, setVisible] = useState(true)
  const form = useRef();
  const valuesInitial = {
    displayName: "",
    email: "",
    password: "12345",
  };

  // let userSchema = object({
  //   displayName: string().required("Falto escribir el usuario"),
  //   email: string().required("Falto escribir el email"),
  // })

  const submit = async() =>{
    await dispatch(startGoogleSignIn())
  }

  const onGoogleSignIn = async() =>{
    if(form.current?.values?.email !== ""){
      await dispatch(startGoogleSignIn())
    }else{
      window.alert("Debe ingresar un correo")
    }
  }

  const createGoogle = async() =>{
    if(form.current?.values?.email !== "" && form.current?.values?.displayName !== "" && form.current?.values?.password !== ""){
      await dispatch(startCreatingUserWithEmailPassword(form.current.values))
    }else{
      window.alert("Faltan atributos")
    }
  }

  // solo prueba de ant
  // const onClose = () => {
  //   setVisible(false)
  // }

  return (
    <>
      <Card
        title={`Hola ${info?.displayName}`}
        actions={[
          <div>
            <button
              type="submit"
              onClick={() => {
                form.current.submitForm();
              }}
            >
              Enviar
            </button>
            {/* <button
              type="submit"
              onClick={onGoogleSignIn}
              disabled={info?.status === 'checking' ? true : false}
            >
              Google
            </button> */}
            <button
              type="submit"
              onClick={() => createGoogle()}
            >
              Create
            </button>
          </div>
        ]}
      >
        <Formik
          // validationSchema={userSchema}
          innerRef={form}
          onSubmit={submit}
          initialValues={valuesInitial}
        >
          <Form>
            <div>
              <label>Usuario</label>
              <Field type="displayName" name="displayName" />
            </div>
            <div>
              <label>Correo Electronico</label>
              <Field type="e-mail" name="email" />
            </div>
            <div>
              <label>Contraseña</label>
              <Field type="password" name="password" />
            </div>
          </Form>
        </Formik>
      </Card>
      {/* // solo prueba de ant
      <Modal open={Visible} bodyStyle={{background:"red"}} onCancel={onClose}>
        Hola
        <Checkbox.Group onChange={(e) => console.log(e)}>
          <Checkbox value={1}>Si</Checkbox>
          <Checkbox value={2}>No</Checkbox>
        </Checkbox.Group>
      </Modal> */}
    </>
  );
};

export default LoginPage;
