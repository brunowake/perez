import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import './Contato.css'
import emailjs from 'emailjs-com'
import { useForm } from "react-hook-form"
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import fbIcon from '../../img/fb.png'
import igIcon from '../../img/ig.png'




export default props => {

    const { register, handleSubmit } = useForm()
    const [open, setOpen] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_4t5h4ha', 'template_998w5kq', e.target, 'user_lWOi8C9IKkuz1cYVz25s6')
            .then((result) => {
                props.modal.setOpen(true)
            }, (error) => {
                window.alert('Falha ao enviar email')
            })
    }

    return (
        <Container maxWidth="xl">
            <div className="contato_container">
                <iframe className="iframe_style" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4420.766676003433!2d-50.34736005292065!3d-21.294934355639935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94966b2bd43730ab%3A0x3e791f92262b66c6!2sAv.%20Nove%20de%20Julho%2C%201679%20-%20Jardim%20Stabile%2C%20Birigui%20-%20SP%2C%2016200-700%2C%20Brasil!5e0!3m2!1spt-BR!2suk!4v1619982745097!5m2!1spt-BR!2suk" allowFullScreen="" loading="lazy"></iframe>


                <div className="coluna_contato">
                    <div className="texto_contato">
                        <div className="email">
                            <EmailIcon />
                            <Typography variant="h5" component="a" href="mailto: pedro.perez@sid.com" style={{ color: "black", textDecoration: 'none' }}>
                                pedroperez@adv.oabsp.org.br
                        </Typography>
                        </div>
                        <div className="phone">
                            <PhoneIcon />
                            <Typography>
                                (18) 98804-1527
                            </Typography>
                        </div>
                        <br />
                        <div >
                            <Typography variant="h5">
                                Av. Nove de Julho, nº 1679, Jardim Stábile,
                            </Typography>
                            <Typography variant="h6">
                                Birigui/SP – CEP 16200-700
                            </Typography>
                        </div>
                    </div>
                    <div className="social_midia">
                        <h2> Mídias Sociais</h2>
                        <div className="list_social_midia">
                            <a href="https://www.facebook.com/pedro.vinicius.perez"> <img src={fbIcon} alt="" /></a>
                            <a href="https://www.instagram.com/pedrovperez/"><img src={igIcon} alt="" /></a>
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Typography variant="h6">
                            Todos os direitos reservados a Perez Advogado.
                            </Typography>
                        <Typography variant="h7">
                            feito por: Bruno Wake
                            </Typography>
                    </div>
                </div>



                <form onSubmit={onSubmit} className="form">

                    <label>Entre em contato </label>
                    <input {...register("nome")} placeholder="Nome" />
                    <input {...register("contato")} placeholder="Telefone" />
                    <input {...register("email")} placeholder="email" />
                    <textarea {...register("texto")} placeholder="texto" />

                    <input type="submit" value="enviar" />
                </form>
            </div>

        </Container>
    )
}