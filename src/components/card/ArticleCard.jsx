/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ArticleCard({ post }) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="/images/style1.jpg"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover object-top brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary" className={'bg-orange-200/50'}>Featured</Badge>
                </CardAction>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                    {post.body}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/blogs/${post.id}`}>
                    <Button className="w-full bg-red-900 hover:bg-red-900/85">View Post</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
