import * as React from 'react';

export interface IProps {
  isFavourite: boolean;
}

function FavouriteImage(props: IProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" fill={`${props.isFavourite ? "#E9C132" : '#FFF'}`} stroke="#E8E8E8"/>
      <path d="M13.6 7.99999L13.3333 6.66666H7.33333V18H8.66666V13.3333H12.4L12.6667 14.6667H17.3333V7.99999H13.6Z" fill={`${props.isFavourite ? "#FFF" : '#E9C132'} `}/>
    </svg>
  );
}

export default FavouriteImage;
