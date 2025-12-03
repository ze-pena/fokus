import { Href, useRouter } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

interface IProps {
  path: Href;
}

export default function GoBackButton({ path }: IProps) {
  const router = useRouter();

  return (
    <Ionicons
      name="arrow-back"
      size={24}
      color="white"
      style={{ marginLeft: 16 }}
      onPress={() => router.navigate(path)}
    />
  );
}
