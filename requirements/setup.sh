#!/bin/bash
[ "$UID" -eq 0 ] || exec sudo bash "$0" "$@"
sudo apt install libusb-1.0-0 libusb-1.0-0-dev 
sudo apt install autoconf
git clone https://github.com/wroberts/rogauracore.git
cd rogauracore/
autoreconf -i
./configure
make
make install
sudo chown root.root /usr/local/bin/rogauracore
sudo chmod g+s /usr/local/bin/rogauracore
