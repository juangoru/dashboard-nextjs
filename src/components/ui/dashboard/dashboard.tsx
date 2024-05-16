import { Separator } from "@/components/ui/separator";
import {
  ArrowDownLeft,
  ArrowUpRight,
  GripHorizontal,
  Settings2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Litecoin } from "@/components/SVG/litecoin";
import { Bitcoin } from "@/components/SVG/bitcoin";
import { Ethereum } from "@/components/SVG/ethereum";
import { Solana } from "@/components/SVG/solana";
import { ComboboxPopover } from "./comboBox";
import { Chart } from "@/components/SVG/char";
import { ComboboxCripto } from "./comboBoxCrypto";

const Dashboard = () => {
  return (
    <div
      className="overflow-hidden max-w-full h-full rounded-lg p-4 ml-4 mr-4 mb-4 pr-4 flex flex-col"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.3))",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.22)",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-l pl-4 pt-4 font-bold">TOTAL BALANCE</h2>
          <p className="text-5xl pl-4 pt-5">
            <span>$154,610</span>
            <span className="text-gray-text">.00</span>
          </p>
        </div>
        <div className="flex h-5 items-center space-x-4 text-m font-thin mr-6">
          <div>
            <p>Today</p>
            <div className="flex items-center pt-1 font-bold">
              <p>-2.5%</p>
              <ArrowDownLeft color="red" />
            </div>
          </div>
          <Separator orientation="vertical" className="h-12 bg-grayText" />
          <div>
            <p>7 Days</p>
            <div className="flex items-center pt-1 font-bold">
              <p>+4.25%</p>
              <ArrowUpRight color="green" />
            </div>
          </div>
          <Separator orientation="vertical" className="h-12 bg-grayText" />
          <div>
            <p>30 Days</p>
            <div className="flex items-center pt-1 font-bold">
              <p>+11.5%</p>
              <ArrowUpRight color="green" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Card className="flex-grow m-3">
          <CardHeader>
            <div className="flex items-center justify-between bg-transparent">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <CardTitle className="text-sm">Bitcoin</CardTitle>
                  <CardDescription className="text-sm">BTC</CardDescription>
                </div>
              </div>
              <div className="pl-10">
                <ArrowUpRight color="green" size={35} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              <p>$52,291</p>
              <p className="text-sm text-up">+0.25%</p>
            </div>
            <Bitcoin />
          </CardContent>
        </Card>

        <Card className="flex-grow m-3">
          <CardHeader>
            <div className="flex items-center bg-transparent">
              <Avatar>
                <AvatarImage src="https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=032" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <CardTitle className="text-sm">Litecoin</CardTitle>
                <CardDescription className="text-sm">LTC</CardDescription>
              </div>
              <div className="pl-10">
                <ArrowUpRight color="green" size={43} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              <p>$8,291</p>
              <p className="text-sm text-up">+0.25%</p>
            </div>
            <Litecoin />
          </CardContent>
        </Card>

        <Card className="flex-grow m-3 ">
          <CardHeader>
            <div className="flex items-center bg-transparent">
              <Avatar>
                <AvatarImage src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <CardTitle className="text-sm">Ethereum</CardTitle>
                <CardDescription className="text-sm">ETH</CardDescription>
              </div>
              <div className="pl-10">
                <ArrowUpRight color="green" size={35} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              <p>$28,291</p>
              <p className="text-sm text-up">+0.25%</p>
            </div>
            <Ethereum />
          </CardContent>
        </Card>

        <Card className="flex-grow m-3">
          <CardHeader>
            <div className="flex items-center bg-transparent">
              <Avatar>
                <AvatarImage src="https://cryptologos.cc/logos/solana-sol-logo.png?v=032" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <CardTitle className="text-sm">Solana</CardTitle>
                <CardDescription className="text-sm">SOL</CardDescription>
              </div>
              <div className="pl-10">
                <ArrowDownLeft color="red" size={35} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              <p>$14,291</p>
              <p className="text-sm text-down">-0.25%</p>
            </div>
            <Solana />
          </CardContent>
        </Card>
      </div>
      <div className="custom-scrollbar overflow-auto m-4 flex justify-between scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <Card className=" overflow-auto flex-shrink-0 bg-fillColor ">
          <CardHeader className="bg-transparent flex justify-between items-center">
            <div className="flex items-start">
              <CardTitle className="text-xl text-black font-bold">
                My Portfolio
              </CardTitle>
              <button className=" text-black font-bold ml-20 pt-1">
                <GripHorizontal />
              </button>
            </div>
          </CardHeader>
          <Separator orientation="horizontal" className="bg-grayText" />
          <CardContent className="flex items-center justify-between">
            <Avatar className="mr-5">
              <AvatarImage src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm font-semibold text-black">
              <p>Bitcoin</p>
              <p className="text-sm">BTC</p>
            </div>
            <div className="flex flex-col items-center justify-center font-semibold text-black ml-20 mr-3">
              <p className="font-xl font-bold">37%</p>
              <p className="text-sm inline-block border rounded-full px-3 py-1 text-center bg-black text-up">
                +2.5%
              </p>
            </div>
          </CardContent>
          <Separator orientation="horizontal" className="-mt-2" />
          <CardContent className="flex items-center justify-between">
            <Avatar>
              <AvatarImage src="https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=032" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm font-semibold text-black">
              <p>Litecoin</p>
              <p className="text-sm">LTC</p>
            </div>
            <div className="flex flex-col items-center justify-center font-semibold text-black ml-20 mr-3">
              <p className="font-xl font-bold pb-1">20%</p>
              <p className="text-sm inline-block border rounded-full px-3 py-1 text-center bg-black text-down">
                -3.5%
              </p>
            </div>
          </CardContent>
          <Separator orientation="horizontal" className="-mt-2" />
          <CardContent className="flex items-center justify-between">
            <Avatar>
              <AvatarImage src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm font-semibold text-black">
              <p>Ethereum</p>
              <p className="text-sm">LTC</p>
            </div>
            <div className="flex flex-col items-center justify-center font-semibold text-black ml-20 mr-3">
              <p className="font-xl font-bold pb-1">50%</p>
              <p className="text-sm inline-block border rounded-full px-3 py-1 text-center bg-black text-up">
                +13.5%
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="flex-grow ml-2">
          <Card className="flex-grow ">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-bold"> Chart </CardTitle>
                <div className="flex items-center">
                  <button className="ml-50 mr-5 border-2 border-grayText rounded-full text-grayText">
                    <Settings2 />
                  </button>
                  <ComboboxPopover />
                </div>
              </div>
            </CardHeader>
            <Separator orientation="horizontal" className="-mt-2" />

            <CardContent className="flex flex-col items-center justify-between">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-center">
                  <ComboboxCripto />
                  <h2 className="text-2xl font-bold">$38,252.02</h2>
                </div>
                <div className="flex space-x-2 text-xs">
                  <button className="p-2 border-3 hover:border-fillColor rounded-full hover:bg-fillColor text-white">
                    1h
                  </button>
                  <button className="p-2 border-3 hover:border-fillColor rounded-full hover:bg-fillColor text-white">
                    3h
                  </button>
                  <button className="p-2 border-3 hover:border-fillColor rounded-full hover:bg-fillColor text-white">
                    1d
                  </button>
                  <button className="p-2 border-3 hover:border-fillColor rounded-full hover:bg-fillColor text-white">
                    1w
                  </button>
                  <button className="p-2 border-3 hover:border-fillColor rounded-full hover:bg-fillColor text-white">
                    30d
                  </button>
                </div>
              </div>
              <Chart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
