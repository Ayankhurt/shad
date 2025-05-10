'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Copy } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function AccordPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center py-10 px-4">
            <main className="w-full max-w-xl space-y-8 bg-zinc-900 rounded-2xl p-6 shadow-xl border border-zinc-800">

                <h1 className="text-2xl font-semibold text-center mb-2">UI Components Showcase</h1>

                {/* Accordion */}
                <section>
                    <h2 className="text-lg font-medium mb-2">Accordion</h2>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* Alert Dialog */}
                <section className="space-y-2">
                    <h2 className="text-lg font-medium">Alert Dialog</h2>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white w-full">
                                Open Chai
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </section>

                {/* Toast Button */}
                <section className="space-y-2">
                    <h2 className="text-lg font-medium">Toast</h2>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() =>
                            toast("Event has been created", {
                                description: "Sunday, May 10, 2025 at 9:00 AM",
                                action: {
                                    label: "Undo",
                                    onClick: () => console.log("Undo"),
                                },
                            })
                        }
                    >
                        Show Toast
                    </Button>
                </section>

                {/* Tooltip */}
                <section className="space-y-2">
                    <h2 className="text-lg font-medium">Tooltip</h2>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white w-full">
                                    Hover me
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add to library</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </section>
            </main>

            {/* Carousel */}
            <section className="w-full max-w-xl mt-8">
                <h2 className="text-lg font-medium mb-2 text-white text-center">Carousel</h2>
                <Carousel className="bg-zinc-900 rounded-xl border border-zinc-800">
                    <CarouselContent>
                        {[1, 2, 3].map((item) => (
                            <CarouselItem key={item} className="flex justify-center items-center h-40">
                                <div className="text-white text-lg font-semibold">
                                    Slide {item}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            <section className="w-full max-w-xl mt-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Share</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Share link</DialogTitle>
                            <DialogDescription>
                                Anyone who has this link will be able to view this.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="link" className="sr-only">
                                    Link
                                </Label>
                                <Input
                                    id="link"
                                    defaultValue="https://ui.shadcn.com/docs/installation"
                                    readOnly
                                />
                            </div>
                            <Button type="submit" size="sm" className="px-3">
                                <span className="sr-only">Copy</span>
                                <Copy />
                            </Button>
                        </div>
                        <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </section>
        </div>
    );
}

export default AccordPage;
