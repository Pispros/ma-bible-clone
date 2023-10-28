'use client';

import NoteContentComponent from "@/components/NoteContent/NoteContent"
import { useRouter } from "next/router";

const EditNote = () => 
{
    const router = useRouter();
    const { id } = router.query;
	return(
		<NoteContentComponent
            noteId={id}
        />
	)
}

export default EditNote