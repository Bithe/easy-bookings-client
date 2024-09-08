import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import RoomReservation from "../../Components/RoomDetails/RoomReservation";

const RoomDetails = () => {
    const {id} = useParams();

    const {data: room ={}, isLoading } = useQuery({
        queryKey: ['room', id],
        queryFn: async ()=>{
            const {data} = await axiosSecure.get(`/room/${id}`);
            return data;

        }
    });
    if (isLoading) {
        return (
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );
      }


  return (
    // <title>{room?.title}</title>
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div>
          {/* <Heading title={room.title} subtitle={room.location} /> */}
          
          <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
            <img
              className="object-cover w-full"
                src={room.image}
              alt="header image"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
        {/* Room Info */}
        <div className="col-span-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div
              className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
            >
              <div>Hosted by {room?.host?.name}</div>

              <img
                className="rounded-full"
                height="30"
                width="30"
                alt="Avatar"
                src={room?.host?.image}
              />
            </div>
            <div
              className="
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              "
            >
              <div>{room?.guests} guests</div>
                  <div>{room?.bedrooms} rooms</div>
                  <div>{room?.bathrooms} bathrooms</div>
            </div>
          </div>

          <hr />
          <div
            className="
          text-lg font-light text-neutral-500"
          >
            {room?.description}
          </div>
          <hr />
        </div>

        <div className="md:col-span-3 order-first md:order-last mb-10">
          {/* RoomReservation */}
          <RoomReservation room={room} />
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;