import React from "react"
import { Stack } from "expo-router"
import { colors } from "@/src/styles/colors"

export default function Layout() {
    const backgroundColor = colors.gray[950]

    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor },
            }}
        />
    )
}