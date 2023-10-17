import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const StackedItems = () => {
    return (
        <div className='px-4'>
            <Stack direction='horizontal' gap={3}>
                <div className="p-2">First item</div>
                <div className="p-2">Second item</div>
                <div className="p-2">Third item</div>

            </Stack>
            {/* 
                ms-auto: centerally in horizontal
                my-auto: vertically central
                ms-auto: all direction central
             */}
            <Stack direction='horizontal' gap={2} className="col-md-3 mx-auto">
                <Button variant="secondary">Save changes</Button>
                <Button variant="outline-secondary">Cancel</Button>
            </Stack>
            <Stack style={{ border: '1px solid red' }} direction="horizontal" gap={3}>
                <div className="p-2">First item</div>
                <div style={{ border: '1px solid red' }} className="p-2 ms-auto">Second item</div>
                <div className="vr" />
                <div className="p-2">Third item</div>
            </Stack>

        </div>
    )
}

export default StackedItems