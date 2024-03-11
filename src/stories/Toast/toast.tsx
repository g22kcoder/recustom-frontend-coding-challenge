import React from 'react';
import SuccessIcon from './../assets/checkSuccess.svg'
import IconDanger from './../assets/IconDanger.svg'
import IconBell from './../assets/bellIcon.svg'
import IconTick from './../assets/tickIcon.svg'
import Avatar from './../assets/Avatar.svg'
import Close from './../assets/close'
import Image from 'next/image';
import { Button } from '../Button/Button';
import './toast.css';

interface ToastProps {
  type?: string;

  CTA?: boolean;

  mobile?: boolean;

 darkMode?: boolean;
 title?: string;

}

export const Toast = ({
  type = 'success',
  CTA = true,
  mobile = false,
  darkMode = false,
  title='title goes here',
  ...props
}: ToastProps) => {
   
  return (
    <>
    {CTA ?<div
      className={['storybook-toast', `storybook-toast--${mobile}`,`storybook-toast--${darkMode}`,`storybook-toast--${type}`].join(' ')}
      {...props}
      ><div style={{display:'flex',justifyContent:'space-between'}}>
      <div style={{display:'flex'}}>

        <Image alt='' src={type === "success"?SuccessIcon:type === "danger"?IconDanger:Avatar} />
        <p style={{margin:'0px', marginLeft:'4px'}}>{type === "Success"?"Success":type === "danger"?"Attention":"Bonnie Green"}</p>
      </div>
      <div><Close color={type === "success"?"#00AC80":type === "danger"?"#FF6464":"#9CA3AF"}/></div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non dignissimos sequi praesentium ut, provident aperiam repudiandae excepturi ex delectus magnam voluptas numquam nam eos mollitia suscipit temporibus velit magni!</p>
    <Button label='Button' mode={`${type === "success"?'primary':type === "danger"?"danger":"secondary"}`}/>
</div>:<div className={['storybook-toast--CTA', `storybook-toast-cta--${mobile}`,`storybook-toast-cta--${type}`].join(' ')} style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>
      <div style={{display:'flex', alignItems: 'center'}}>

        <Image alt='' src={type === "success"?IconTick:type === "danger"?IconBell:''} />
        <p style={{margin:'0px', marginLeft:'4px'}}>{title}</p>
      </div>
      <div><Close color={type === "success"?"#00AC80":type === "danger"?"#FF6464":"#9CA3AF"}/></div>
    </div>}
    
      </>
  );
};
