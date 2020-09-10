desc: Open Ambience Generator
// Written by Allordacia 
//Version Beta 1, September 2020


//slider1:gain_db=0<-150,12,1>gain (dB)
slider1:volca_num=3<1,10,1>Number of Devices?
slider1:device_sel=1<1,volca_num,1>Device Setup

in_pin:left input
in_pin:right input
out_pin:left output
out_pin:right output

@init
last_gain=10^(gain_db/20);

@slider
next_gain=10^(gain_db/20);

@block
d_gain = (next_gain - last_gain)/samplesblock;

@sample
spl0 *= last_gain;
spl1 *= last_gain;
last_gain += d_gain;
