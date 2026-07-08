import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { mockAuthService as auth } from "../services/auth-service"
import { cn } from "@/lib/utils"

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email === 'test@example.com' && password === 'password') {
            auth.setAuthenticated(true)
            setError('')
            navigate({ to: '/dashboard' })
            return
        }
        setError('Incorrect email and password.')
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@mail.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {error ? <p className={cn(
                            "text-xs py-3 text-red-500/80",
                        )}>{error}</p> : null}

                        {/* <Button
                            type="submit"
                            className="w-full"
                        >
                            Login
                        </Button> */}
                        <button type="submit">
                            Log in
                        </button>
                    </form>
                </CardContent>
                {/* <CardFooter className="flex-col gap-2">
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Login
                    </Button>
                </CardFooter> */}
            </Card>
        </div>
    )
}
