

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to { 
    -webkit-transform: rotate(360deg);
  }
}

img.star
{
    -webkit-animation-name:             rotate; 
    -webkit-animation-duration:         0.5s; 
    -webkit-animation-iteration-count:  infinite;
    -webkit-animation-timing-function: linear;
}