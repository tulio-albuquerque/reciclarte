import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  token: string | null;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iRegisterData {
  //se der erro na typagem do login, ou register, talvez estamos typando duas vezes.
  name: string;
  email: string;
  password: string;
  bio: string;
  profile_pic: string;
}

interface iUserContextProvider {
  user: iUser | null;
  loading: boolean;
  loginSubmit: (data: iLoginData) => void;
  registerSubmit: (data: iRegisterData) => void;
  logout: () => void;
}

export const UserContext = createContext<iUserContextProvider>(
  {} as iUserContextProvider
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginSubmit = async (data: iLoginData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Login efetuado!");
      setUser({ token: response.data.accessToken });

      localStorage.setItem("@TOKEN", response.data.accessToken);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit = async (data: iRegisterData) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Cadastro feito com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Desculpe, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, loading, loginSubmit, registerSubmit, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
