'use client';

import NoteContentComponent from "@/components/Note/Note"
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