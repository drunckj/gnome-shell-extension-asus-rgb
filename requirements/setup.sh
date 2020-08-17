#!/bin/bash
[ "$UID" -eq 0 ] || exec sudo bash "$0" "$@"
sudo apt install libusb-1.0-0 libusb-1.0-0-dev 
sudo apt install autoconf
cd rogauracore/
autoreconf -i
./configure
make
make install
chown root.root /usr/local/bin/rogauracore
chown u+s /usr/local/bin/rogauracore
