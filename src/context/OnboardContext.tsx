import Onboard from "bnc-onboard";
import { API, Wallet } from "bnc-onboard/dist/src/interfaces";
import React, { Component, createContext, useContext } from "react";
import { BLOCK_NATIVE_API_KEY } from "../config/constants/blocknative";

export type OnBoardContextType = {
  onboard: API;
  address: string;
  balance: string;
  network: number;
  wallet: Wallet;
  setup: () => Promise<void>;
};

export const OnboardContext = createContext<OnBoardContextType>(
  {} as OnBoardContextType
);

export function useOnboardContext() {
  return useContext(OnboardContext);
}

const walletChecks = [{ checkName: "connect" }, { checkName: "network" }];

// const wallets = [{ walletName: "metamask", preferred: true }];

class OnboardProvider extends Component {
  state = {
    onboard: {} as API,
    address: "",
    balance: "",
    network: 0,
    wallet: {} as Wallet,
    appNetworkId: 0,
    setup: () => {},
  };

  constructor(props: any) {
    super(props);

    const initialisation = {
      dappId: BLOCK_NATIVE_API_KEY,
      networkId: 1,
      walletCheck: walletChecks,
      walletSelect: {
        heading: "Select a wallet",
        // wallets,
      },
      subscriptions: {
        address: (address: string) => {
          this.setState({ address });
        },
        balance: (balance: string) => {
          this.setState({ balance });
        },
        network: (network: number) => {
          this.setState({ network });
        },
        wallet: (wallet: any) => {
          this.setState({ wallet });
        },
      },
    };

    const onboard = Onboard(initialisation);

    this.state = {
      ...this.state,
      onboard,
    };
  }

  setup = async () => {
    const { onboard } = this.state;
    try {
      const selected = await onboard.walletSelect();
      if (selected) {
        const ready = await onboard.walletCheck();
        if (ready) {
          const walletState = onboard.getState();
          this.setState({ ...walletState });
        } else {
        }
      } else {
      }
    } catch (error) {
      console.log("error onboarding", error);
    }
  };

  setConfig = (config: any) => this.state.onboard.config(config);

  render() {
    return (
      <OnboardContext.Provider value={{ ...this.state, setup: this.setup }}>
        {this.props.children}
      </OnboardContext.Provider>
    );
  }
}

export const useOnboard = () => {
  const { onboard } = useOnboardContext();
  return onboard;
};

export const useGetState = () => {
  const { onboard } = useOnboardContext();
  return onboard.getState();
};

export const useAddress = () => {
  const { address } = useOnboardContext();
  return address;
};

export const useWalletBalance = () => {
  const { balance } = useOnboardContext();
  return balance;
};

export const useWallet = () => {
  const { wallet } = useOnboardContext();
  return wallet;
};

export const useNetwork = () => {
  const { network } = useOnboardContext();
  return network;
};

export const useSetup = () => {
  const { setup } = useOnboardContext();
  return setup;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useWalletProvider = () => {
  const { provider } = useWallet() || ({} as Wallet);
  return provider;
};

export const useSigner = () => {
  const provider = useWalletProvider();
  const network = useNetwork();
  if (network && provider) {
    const signer = new provider.getSigner();
    return signer;
  }
  return {};
};

export default OnboardProvider;
