import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const ItemSignIn = ({ handleChange, handleClick, loading,error }) => {
  return (
    <Container>
      <div className="container-lg">
        <h1>MiSalud</h1>
        <div className='container-form'>
          <div className="header">
            <div></div>
            <p>Iniciar sesion</p>
            <div></div>
          </div>
          <form>
            <div>
              <label>Nombre de usuario <span>*</span></label>
              <input type="text" name="username" placeholder='Nombre de usuario' onChange={handleChange} />
            </div>
            <div>
              <label>Contraseña <span>*</span></label>
              <input type="password" name="password" placeholder='Contraseña' onChange={handleChange} />
            </div>
            {
              error && <p className='error'>{error.message}</p>
            }
            
            <button type='submit' disabled={loading} onClick={handleClick}><span>Iniciar sesion</span></button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ItemSignIn

const Container = styled.section`
  background: #F3F1FD;
  padding: 50px 1rem;
  h1{
    color: #6150FF;
    margin: 0 auto;
    text-align: center;
    max-width: 768px;
    width: 100%;
    font-size: 2rem;
    font-weight: 800;
  }
  @media (min-width: 768px){
    padding: 100px 1rem;
    h1{
      font-size: 3.7rem;
    }

  }

  .container-form{
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 5rem;
    .header{
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        width: 75%;
        border-bottom: 1px dashed #6150FF;
      }
      p{
        color: #18142B;
        width: 100%;
        text-align: center;
        padding: 0 1rem;
        font-size: 1rem;
        margin: 0;
      }
    }

    form{
      margin-top: 1rem;
      div{ 
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        margin-top: 1rem;
        label{
          color: #18142B;
          font-size: 1.3rem;
          font-weight: 400;
          span{
            color: #6150FF;
          }
        }
        input{
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid #9795A0;
          background-color: transparent;
          color: #9795A0;
          margin-top: 7px;
          border-radius: 10px
        }
      }
      p{
        color: #000;
        text-align: center;
        font-size: 1rem;
        margin-top: 1rem;
        a{
          color: #F89A40;
          text-decoration: none;
          font-weight: 600;
          &:hover{
            text-decoration: underline;
          }
        }

        &.error{
          color: #d10000;
          font-weight: 600;
          margin: 0;
          margin-top: 2rem;
        }
      }

      button{
        width: 100%;
        padding: 1rem 0;
        color: #fff;
        background: #6150FF;
        border: none;
        margin-top: 2rem;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        span{
          position: relative;
          z-index: 10;
          font-weight: 600;
        }
        &::before{
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 100%;
          left: 0;
          background-color: #000000;
          transition: all .3s ;
        }
        &:hover{
          &::before{
            top: 0;
          }
          color: #F3F1FD;
        }
      }
    }
  }
`